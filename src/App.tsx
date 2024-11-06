
import { Formulario } from "./components/Formulario"
import { useAuthStore } from "./store/store"

export const App = () => {

  const logged = useAuthStore(state => state.logged)
  const user = useAuthStore(state => state.user)
  const changeLogged = useAuthStore(state => state.changeLogged)
  return (
    <>
      <p>User : {user?.username}</p>
      <p>{logged ? 'activo' : 'no activo'}</p>
      <button onClick={changeLogged}>
        Pulsar
      </button>

      <Formulario />
    </>
  )
}
