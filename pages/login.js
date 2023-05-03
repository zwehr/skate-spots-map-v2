import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <>
        <p>Welcome, {session.user.email}</p>
        <button onClick={() => signOut()}></button>
      </>
    );
  } else {
    return (
      <>
        <p>You are not signed in.</p>
        <button onClick={() => signIn()}>Sign In</button>
      </>
    );
  }
}
