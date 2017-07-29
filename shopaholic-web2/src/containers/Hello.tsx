import * as actions from '../actions/';
import { StoreState } from '../interfaces/index';
import { connect, Dispatch } from 'react-redux';
import Hello from '../components/Hello';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
      enthusiasmLevel,
      name: languageName,
    };
}
  
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
      onIncrement: () => dispatch(actions.incrementEnthusiasm()),
      onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
