import React, { Component } from 'react'


export default class Movelist extends Component {
    render() {
        return (
          <div>
           
                <select>
                              <option value="move" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>

                                    
            </div>
        )
    }
}
