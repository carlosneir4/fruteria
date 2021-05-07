import Reatc from 'react';

const component = ({props}) => {

    return(
        <div>
            Esto es un componente funcional.
        </div>
    );
};

class App extends React.Component {

   state = {

    }

    render () {
        return(
            <div>
                Esto es un componente con estado.
            </div>
        );
    }

}