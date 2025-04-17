import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()

  const handleLogin = () => {
    localStorage.setItem("user", "demoUser")
    router.push('/dashboard')
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Demo Login</h1>
      <button onClick={handleLogin} className="px-4 py-2 bg-green-500 rounded">Login as Demo User</button>
    </div>
  )
}