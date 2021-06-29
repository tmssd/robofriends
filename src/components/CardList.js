import React from 'react';
import Card from './Card';
// eslint-disable-next-line
import ErrorBoundry from './ErrorBoundry';

const CardList = ({ robots }) => {
    /* this piece of code intended for invoking the ErrorBoundry Component(that is useful for production environment) */
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
                            id={user.id}
                            name={user.name}
                            email={user.email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;
