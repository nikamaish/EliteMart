import { Button } from 'primereact/button';

function Navbar() {
  return (
    <header className="flex justify-content-between py-2 border-bottom-1">

      <div className="flex align-items-center gap-2 cursor-pointer">
        <i className="pi pi-heart text-4xl" style={{ fontSize: '1.5rem' }}></i>
        <span className="font-bold text-4xl" style={{color:'green'}}>PharmEasy</span>
      </div>

      
     <div className="flex align-items-center gap-2">
  
  
  <Button 
    icon="pi pi-user" 
    label="Login" 
    className="p-button-text text-gray-700 text-sm px-2 py-1"
    />

  <Button 
    icon="pi pi-tags" 
    label="Offers" 
    className="p-button-text text-blue-500 text-sm px-2 py-1"
  />

<Button 
  icon="pi pi-shopping-cart" 
  label="Cart"
   className="p-button-text text-gray-700 text-sm px-2 py-1"
/>

</div>
    </header>
  );
}

export default Navbar;