import { getData } from '../lib/csvparse';
import Layout from "./component/Layout";

export default async function Home() {
  const data = await getData();

  return (
    <div className="bg-cover bg-center absolute inset-0 bg-[url('https://images.unsplash.com/photo-1698859858642-bb45d13a7e96?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] grid justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <Layout data={data} /> 
    </div>
  );
}
