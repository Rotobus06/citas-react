import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 mb:h-screen overflow-y-scroll">

            {pacientes && pacientes.lengh ? (
            <>
                <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Administra tus {''}
                    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                </p>
              
                { pacientes.map( paciente => (
                    <Paciente
                        key={paciente.id} 
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />
                ))}
            </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes