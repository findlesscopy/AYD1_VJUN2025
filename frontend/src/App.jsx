import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try{
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resultado = await res.json();
      console.log('Respuesta del servidor:', resultado);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="max-w-md w-full p-10 rounded-md bg-gray-500">
        <h1 className="text-md font-bold text-center">Inicio de sesión</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="correo" className="text-text-100">Usuario:</label>
          <input
            className="w-full px-4 py-2 rounded-md mb-4 bg-gray-300"
            type="text"
            name="correo"
            placeholder="Correo"
            {...register('correo', { required: true })}
          />

          <label htmlFor="password" className="text-text-100">Contraseña:</label>
          <input
            className="w-full px-4 py-2 rounded-md mb-4 bg-gray-300"
            type="password"
            name="password"
            placeholder="Escribe tu contraseña"
            {...register('password', { required: true })}
          />

          <label htmlFor="password" className="text-text-100">Edad:</label>
          <input
            className="w-full px-4 py-2 rounded-md mb-4 bg-gray-300"
            type="edad"
            name="edad"
            placeholder="Escribe tu edad"
            {...register('edad', { required: true })}
          />

          <label htmlFor="password" className="text-text-100">Municipio:</label>
          <input
            className="w-full px-4 py-2 rounded-md mb-4 bg-gray-300"
            type="municipio"
            name="municipio"
            placeholder="Escribe tu municipio"
            {...register('municipio', { required: true })}
          />

          <div className="flex items-center justify-center">
            <button
              className="px-4 py-1 rounded-md my-1 w-full font-semibold"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
