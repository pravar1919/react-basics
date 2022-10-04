import React, { Component } from 'react';
import { getMovies } from '../services/movieData';

class Movies extends Component {
    state = { 
        movies: getMovies()
    }
    
    handleDelete = movie => {
        
    }
    
    render() { 
        return (
            <div className='container'>
                <div className='mb-5 mt-5'>we have {this.state.movies.length} movies.</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Genere</th>
                            <th>Stock</th>
                            <th>Rental</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.movies.map((e, i)=>{ 
                                return (
                                    <tr key={e._id}>
                                        <th>{i}</th>
                                        <td>{e.title}</td>
                                        <td>{e.genere.name}</td>
                                        <td>{e.numberInStock}</td>
                                        <td>{e.dailyRentalRate}</td>
                                        <td><button className='btn btn-danger'>Delete</button></td>
                                    </tr>
                                )
                            }) 
                        }
                            
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Movies;