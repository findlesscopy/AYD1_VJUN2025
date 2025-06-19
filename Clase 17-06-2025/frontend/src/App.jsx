function App() {

  onclick = (e) => {
    alert("Registro enviado correctamente");
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
              <form>
                <div className="col-span-3 mb-3">
                  <div className="grid grid-cols-6 gap-2">
                    <div className="col-span-6">
                      <h2 className="font-bold text-center">Datos del Conductor</h2>
                    </div>

                    <div className="col-span-6">
                      <label>Nombre Completo*</label>
                      <input
                        className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded-md"
                        type="text"
                        placeholder="Nombre Completo"
                        data-cy="inputNombreCompleto"
                      />
                    </div>

                    <div className="col-span-2">
                      <label>Teléfono*</label>
                      <input
                        className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded-md"
                        type="text"
                        placeholder="Teléfono"
                        data-cy="inputTelefono"
                      />
                    </div>

                    <div className="col-span-2">
                      <label>Edad*</label>
                      <input
                        className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded-md"
                        min="0"
                        max="100"
                        type="number"
                        id="inputEdad"
                        placeholder="Edad"
                        data-cy="inputEdad"
                      />
                    </div>

                    <div className="col-span-2">
                      <label>DPI*</label>
                      <input
                        className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded-md"
                        type="text"
                        placeholder="DPI"
                        data-cy="inputDPI"
                      />
                    </div>

                    <div className="col-span-4">
                      <label>Correo Electrónico*</label>
                      <input
                        className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded-md"
                        type="email"
                        placeholder="Correo Electrónico"
                        data-cy="inputCorreoElectronico"
                      />
                    </div>

                    <div className="col-span-2">
                      <label>Género*</label>
                      <select className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded-md " data-cy="selectGenero">
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>

                    <div className="col-span-4">
                      <label>Dirección*</label>
                      <input
                        className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded-md"
                        type="text"
                        placeholder="Dirección"
                        data-cy="inputDireccion"
                      />
                    </div>

                    <div className="col-span-6">
                      <label>Curriculum Vitae*:</label>
                      <div className="w-full">
                        <input
                          className="file:bg-blue-600 file:text-white file:px-4 file:py-1 file:hover:bg-blue-700 file:rounded-md file:my-1 file:w-full file:font-semibold w-full bg-gray-700 text-gray-100"
                          type="file"
                          id="inputCV"
                          data-cy="inputCV"
                        />
                      </div>
                    </div>

                    <div className="col-span-6">
                      <button
                        className="bg-blue-600 px-4 py-2 hover:bg-blue-700 rounded-md my-1 w-full text-white font-semibold"
                        data-cy="btnRegistrar"
                        onclick={onclick}
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
