import { useEffect, useState, type JSX } from "react"
import { verifyToken } from "../services/api";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: JSX.Element
}

export default function ProtectedRoute ({children}: ProtectedRouteProps) {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const token = localStorage.getItem('blog_token');

  useEffect(() => {
    if (!token) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsValid(false)
      return
    }
    const tokenVerifyCall = async () => {
      try {
        const verifyData = await verifyToken(token)
        if(verifyData.valid) {
          setIsValid(true)
        }
      } catch (error) {
        console.error(error);
      }
    }
    tokenVerifyCall()
  }, [token])

    if (isValid === null) {
      return <div>Verifying auth...</div>
    }

    if (!isValid) {
      localStorage.removeItem('token')
      return <Navigate to="/login" replace />
    }

    return children
}
