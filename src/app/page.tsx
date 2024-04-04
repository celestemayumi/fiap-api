import Person from "@/components/Person";
import Header from "@/components/Header";
import { Item } from "./interfaces";

const dataPerson: Item[] = [
  {
    name: "Celeste",
    address: 'Rua 123',
    phone: "11 91234-1234",
    mail: "celeste@gmail.com",
    status: "error"
  },
  {
    name : "Luana",
    address : "Rua 321",
    phone : "11 95678-5678",
    mail : "luana@gmail.com",
    status: "sucess"
  },
  {
    name : "Livia",
    address : "Rua 213",
    phone : "11 99101-9101",
    mail : "livia@gmail.com",
    status: "sucess"
  },
  {
    name : "Nicolas",
    address : "Rua 245",
    phone : "11 99401-1201",
    mail : "nicolas@gmail.com",
    status: "sucess"
  }
];

dataPerson[0]

export default function Home() {
  return (
    <main>
      <Header/>
      {
        dataPerson.map((item: Item)=>{
          return(
            <Person 
              name={item.name}
              address = {item.address}
              phone = {item.phone}
              mail = {item.mail}
              status = {item.status}
          ></Person>
          )
        })
      }
    </main>
  );
}
