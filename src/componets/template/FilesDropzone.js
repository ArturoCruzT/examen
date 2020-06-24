import React from 'react';
import Dropzone from 'react-dropzone'
import {
    FaPaperclip, FaRegFileAlt, FaFileDownload
} from "react-icons/fa";
import {buscarTexto} from "../../helpers/generalHelper";

const FilesDropzone = ({archivos = null, onChange, size = 'lg', multiple = false}) => {
    const onChangeFile = (acceptedFiles) => {
        console.log('todo bien')
        onChange(acceptedFiles)
    }
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="w-100 px-2">
                    <Dropzone onDrop={acceptedFiles => onChangeFile(acceptedFiles)} multiple={multiple}>
                        {({getRootProps, getInputProps, isDragActive, isDragReject}) => (
                            <section>
                                <div {...getRootProps()} className="rounded  cursor"
                                     style={{border: '2px dashed  #2962ff'}}>
                                    <input {...getInputProps()}   />
                                    {
                                        size === 'lg' &&
                                        <p className="text-small px-4"> {
                                            isDragActive ?
                                                <div className="d-flex justify-content-center flex-column text-primary">
                                                    <div className="d-flex justify-content-center text-dark">
                                                        Suelte para agregar los archivos
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <FaFileDownload size={30}/>
                                                    </div>

                                                </div> : 'Arrastre y suelte alguno(s) archivo(s) aquí, o haga clic para seleccionar archivo(s)'
                                        } </p>
                                    }
                                    {
                                        size === 'sm' &&
                                        <div>
                                            {isDragReject && "File type not accepted, sorry!"}
                                            {
                                                isDragActive &&
                                                <div className="d-flex justify-content-center text-primary">
                                                    <span> <FaFileDownload/></span> <span> Agregar </span>
                                                </div>
                                            }
                                            {
                                                !isDragActive &&
                                                <div className="w-100 d-flex justify-content-center">
                                                    <span> <FaPaperclip/></span> <span> Adjuntar </span>
                                                </div>
                                            }


                                        </div>


                                    }

                                </div>
                            </section>
                        )}
                    </Dropzone>
                </div>
                {
                    size === 'sm' &&

                    <div
                        className={` text-white px-2 rounded d-flex justify-content-center ${archivos.length > 0 ? '  bg-success   ' : 'bg-dark'}  `}>
                        {archivos.length}
                        <div>
                            <FaRegFileAlt/>
                        </div>
                    </div>
                }
            </div>
            <div>
                {
                    size === 'lg' &&
                    <div>
                        {
                            (typeof archivos === 'Array') ?
                                <div>
                                    <ul>
                                    {

                                        (archivos || []).map((file, index) =>
                                            <li key={`file${index}`} className="px-5">
                                                {buscarTexto(file , ['name'])}
                                            </li>
                                        )
                                    }
                                    </ul>
                                </div> :
                                <div>
                                        <div className="px-2">
                                            {buscarTexto(archivos , ['name'])}
                                        </div>
                                </div>
                        }
                    </div>
                }
            </div>

        </div>
    );
};

export default FilesDropzone;