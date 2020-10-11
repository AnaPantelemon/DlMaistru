import React from 'react'
import { useParams } from 'react-router-dom'
import {useForm, useApi} from '../../hooks';

export default function WorkerDetails() {
    const { id } = useParams();
    const [ worker ] =  useApi(`games/${id}`);

    const {values, bindInput} = useForm(worker);

    if(!worker) {
        return <h1>Loading ...</h1>;
    }

    return (
        <div>
            <h1>{ worker.title }</h1>
            <div className="form-group row">
                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="title" {...bindInput('title')} />
                    {values?.title}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="genre" className="col-sm-2 col-form-label">Genre</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="genre" {...bindInput('genre')} />
                    {values?.genre}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="publisher" className="col-sm-2 col-form-label">Publisher</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="publisher" {...bindInput('publisher')} />
                    {values?.publisher}
                </div>
            </div>
        </div>
    )
}

