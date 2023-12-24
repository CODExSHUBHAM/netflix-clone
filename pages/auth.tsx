import Input from "@/components/input"
import { register } from "module";
import { useCallback, useState } from "react"

const Auth = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [varriant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant == 'login' ? 'register' : 'login')
    }, [])

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover">
            <div className="h-full w-full bg-black lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {varriant == 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {varriant == 'register' && (
                                <Input
                                    label="Username"
                                    onChange={(ev: any) => setName(ev.target.value)}
                                    id="name"
                                    value={name}
                                />)}
                            <Input
                                label="Email"
                                onChange={(ev: any) => setEmail(ev.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input
                                label="Password"
                                onChange={(ev: any) => setPassword(ev.target.value)}
                                id="password"
                                type="password"
                                value={password}
                            />
                            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                                {varriant == 'login' ? 'Login' : 'Sign Up'}
                            </button>
                            <p className="text-neutral-500 mt-12 ">
                                {varriant == 'login' ? 'First time using Netflix?':'Alreaady have an account'}
                                <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {varriant == 'login' ? 'Create an account':'Log In'}
                                    
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth