import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const url = import.meta.env.VITE_API_URL;
    
    console.log(url)
    try {
      console.log(url+'/AYD1/');
      const response = await fetch(`${url}/AYD1/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      alert(response);
      // Limpiar el formulario
      //document.querySelector('form').reset();
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      if (error instanceof Error) {
        alert(`Error: ${error.message}`);
      } else {
        alert('Ocurrió un error desconocido');
      }
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 py-10">
        <div className="bg-gray-800 max-w-xl w-full p-10 rounded-md shadow-lg">
          <div className="grid grid-cols-3 p-2 gap-2">
            <div className="col-span-3">
              <h1 className="text-2xl font-bold text-center">Registro</h1>
            </div>

            <div className="col-span-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-span-3 mb-3">
                  <div className="grid grid-cols-6 gap-2">
                    <div className="col-span-6">
                      <h2 className="font-bold text-center">Datos del Conductor</h2>
                    </div>

                    <div className="col-span-3">
                      <label>Nombre*</label>
                      <input
                        className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded-md"
                        type="text"
                        placeholder="Nombre"
                        data-cy="inputNombre"
                        {...register("nombre", { required: true })}
                      />
                    </div>

                    <div className="col-span-3">
                      <label>Apellido*</label>
                      <input
                        className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded-md"
                        type="text"
                        placeholder="Apellido"
                        data-cy="inputApellido"
                        {...register("apellido", { required: true })}
                      />
                    </div>

                    <div className="col-span-6">
                      <label>Correo Electrónico*</label>
                      <input
                        className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded-md"
                        type="email"
                        placeholder="Correo Electrónico"
                        data-cy="inputCorreoElectronico"
                        {...register("email", { required: true })}
                      />
                    </div>

                    <div className="col-span-6">
                      <label>Contraseña*</label>
                      <input
                        className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded-md"
                        type="password"
                        placeholder="Contraseña"
                        data-cy="pass"
                        {...register("pass", { required: true })}
                      />
                    </div>

                    <div className="col-span-3">
                      <label>Género*</label>
                      <select
                        className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded-md"
                        name="genero"
                        {...register('genero', { required: true })}
                      >
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>

                    <div className="col-span-3">
                      <label>Fecha de Nacimiento*</label>
                      <input
                        className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded-md"
                        type="date"
                        data-cy="inputFechaNacimiento"
                        {...register("fecha_nacimiento", { required: true })}
                      />
                    </div>

                    <div className="col-span-6">
                      <label>Dirección*</label>
                      <input
                        className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded-md"
                        type="text"
                        placeholder="Dirección"
                        data-cy="inputDireccion"
                        {...register("direccion", { required: true })}
                      />
                    </div>

                    <div className="col-span-6">
                      <button
                        className="bg-blue-600 px-4 py-2 hover:bg-blue-700 rounded-md my-1 w-full text-white font-semibold"
                        data-cy="btnRegistrar"
                      >
                        Registrarse
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
