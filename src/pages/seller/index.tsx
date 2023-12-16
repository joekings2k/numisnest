
import Collections from 'src/components/Profilecomponents/Collections'
import Featured from 'src/components/Profilecomponents/Featured'
import SellerProfile from 'src/components/Profilecomponents/SellerProfile'
import ItemsProfile from 'src/components/Profilecomponents/items'
import Items from 'src/components/homeComponents/Items'
import VisitorLayout from 'src/components/layouts/VisitorLayout'



const SellerPage = ({}) => {
  return (
    <VisitorLayout>
      <SellerProfile />
      <Featured />
      <Collections />
      <ItemsProfile />
    </VisitorLayout>
  );
}

export default SellerPage