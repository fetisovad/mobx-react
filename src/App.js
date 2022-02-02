import {observer} from 'mobx-react-lite'
import useStore from "./hooks/useStore";

function App() {
  const {users, boards} = useStore()

  // console.log('users >>', users.toJSON())
  console.log('active boards >>', boards.active?.sections[0]?.tasks?.toJSON())

  return (
    <div>
      Start
    </div>
  );
}

export default observer(App);
