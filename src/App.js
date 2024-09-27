import './App.css';
import Menu from './Menu';
import Information from './Information';
import Button from './Button';
import Hello from './Hello';
import Car from './Car';
import Login from './Login';

function App() {

  const userName = "Mai Cồ";
  const isLogin = false;
  const handleButtonClick = () => {
    if (!isLogin) {
      alert('Chưa đăng nhập!');
    } else {
      alert('Đã đăng nhập!');
    }
  };

  return (
    <>
      <Information name={userName} />
      <Menu />
      <Button onclick={handleButtonClick} />
      <div className="App">
        <Hello />
      </div>
      <Car />

      <Login />
    </>
  );
}

export default App;
