import { useState } from "react";


export default function Login() {
  //States
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //Handles
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <form method="get">
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={email} onChange={handleEmail}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={handlePassword} />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}
