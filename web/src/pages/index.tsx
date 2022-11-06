
import Image from 'next/image'
import previewNlwCopa from '../assets/nlw-copa-preview.png'
import NlwLogoImg  from '../assets/logo.svg'
import usersAvatarImg from '../assets/usersAvatarExample.png'
import checkIconImg from '../assets/check-icon.svg'
import { GetServerSideProps, GetStaticProps } from 'next'
import { api } from '../../lib/axios'
import { ChangeEvent, FormEvent, FormEventHandler, InputHTMLAttributes, useState } from 'react'


interface UsersCount  {
    count: number
}

interface GuessesCount {
    count: number
}
interface PoolsCount {
    count: number
}

interface HomeProps {
    usersCount: UsersCount
    guessesCount: GuessesCount,
    poolsCount: PoolsCount
}

export default function Home({guessesCount,usersCount,poolsCount}: HomeProps){
    const [poolTitle, setPoolTitle] = useState('')

    function handleChangePoolTitle(event: ChangeEvent<HTMLInputElement>){
        setPoolTitle(event.target.value)
        console.log(event.target.value)

    }



    async function handleCreateNewPool(event: FormEvent){
        event.preventDefault()

        try {
            const response = await api.post('/pools',{
                title: poolTitle
            })
            
            const  code : string = response.data.code
            await navigator.clipboard.writeText(code)
            alert(`bolão ${poolTitle} criado com succesoo, o código de accesso é este ${code} o código foi copiado para á sua área de tranferência  
                `
            )
            
        } catch (error) {
            console.warn(error)
            alert('não foi possível realizar o bolão por favor tente novamente')
        }

       

        setPoolTitle('')
    }
    return(
        <div className='max-w-6xl h-screen items-center  mx-auto  px-6 grid grid-cols-2 gap-28'>
            <main>
                <Image src={NlwLogoImg} alt='logo amerela escrita nlw copa'/>
                <h1 className='text-5xl mt-[3.75rem] leading-tight    text-white font-bold'>
                    Crie seu próprio bolão da copa e compartilhe entre amigos!
                </h1>

                <div className='mt-10 flex gap-2 items-center'>
                    <Image quality={100} src={usersAvatarImg} alt=''/>
                    <strong  className='text-xl text-gray-100 '>
                        <span className='text-green-500'>{usersCount.count}</span> pessoas já estão usando
                    </strong>
                </div>

                <form 
                    onSubmit={handleCreateNewPool} 
                    className='flex gap-2 mt-10 '
                >
                 
                    <input
                        required 
                        type={'text'} 
                        value={poolTitle}
                        onChange={handleChangePoolTitle}
                        placeholder='Qual nome do seu bolão?' 
                        className={`
                            flex-1 rounded py-4 px-6 bg-gray-500 border border-gray-600 text-gray-100 text-sm
                            placeholder:text-gray-200
                        `}
                    />
                    <button type='submit' className={
                        `
                            px-6 py-5 font-bold text-sm text-gray-800 rounded bg-yellow-500 uppercase
                            hover:opacity-80 transition-opacity
                        `
                    }>
                        Cria meu bolão
                    </button>
                
                </form>
                
                <p className='mt-4 text-sm text-gray-400 max-w-[25rem] leading-relaxed '>
                    Após criar seu bolão, você receberá um 
                    código único que poderá usar para convidar outras pessoas 🚀
                </p>

                <footer className='mt-10 pt-10 grid grid-cols-2  border-t border-t-gray-600'>
                    <section className='flex-1 flex border-r border-r-gray-600 gap-6 items-center'>
                        <Image src={checkIconImg} alt=''/>
                        <div>
                            <strong className='block text-2xl text-gray-100'>+{poolsCount.count}</strong>
                            <span className=' text-gray-100 text-base'>Bolões criados</span>
                        </div>
                    </section>

                    <section className='flex-1 flex ml-16 gap-6 items-center '>
                        <Image 
                            src={checkIconImg} 
                            alt='dois celulares montrando uma prévia do Nlw app Mobile'
                            quality={100}
                        />
                        <div>
                            <strong className='block text-2xl text-gray-100'>{guessesCount.count}</strong>
                            <span className=' text-gray-100 text-base'>Palpítes Criados</span>
                        </div>
                    </section>
                </footer>

            </main>

            <aside >
                <Image src={previewNlwCopa} width={518} height={605} alt='' />
            </aside>
        </div>
    )
}


export const  getStaticProps : GetStaticProps = async () => {
    try {
        

        const [usersCountResponse,guessesCountResponse,poolsCountResponse] = await Promise.all([
            api.get('/users/count'),
            api.get('/guesses/count'),
            api.get('/pools/count')
        ])

        const usersCount: UsersCount = usersCountResponse.data
        const guessesCount: GuessesCount = guessesCountResponse.data
        const poolsCount: PoolsCount = poolsCountResponse.data
        
        return{
            props:  {
                usersCount,
                guessesCount,
                poolsCount
    
            },
            revalidate: 60 * 10 // 10 minutos 
            
        }
        
    } catch (error) {
        return {
            notFound: true,
        }
    }

}