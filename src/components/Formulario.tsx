import { useForm } from "react-hook-form"
import { useAuthStore, User } from "../store/store"


export const Formulario = () => {

    const { register, handleSubmit} = useForm<User>()
    const setUser = useAuthStore(state => state.setUser)
    const onSubmit = (values: User) =>{
        setUser(values)
    }
  return (
    <div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="">Username</label>
                <input type='text' {...register('username')}></input>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type='password'{...register('password')}></input>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type='text' {...register('email')}></input>
            </div>
            <div>
                <label htmlFor="">Role</label>
                <input type='text' {...register('role')}></input>
            </div>
            <input type="submit" value='Enviar'></input>
        </form>
    </div>
  )
}
