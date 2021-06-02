import React, { Component } from 'react';
import Card from './Card';
import ErrorBoundry from './ErrorBoundry';

const CardList = ({ robots }) => {
    /* this piece of code intended for invoking the ErrorBoundry Component(that is useful for productio environment) */
    // if (true) {
    //     throw new Error('NOOOOOO!')
    // }
    
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>

    );
}

export default CardList;
