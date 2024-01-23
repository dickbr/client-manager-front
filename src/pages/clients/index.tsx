import Skeleton from "@app/components/Skeleton";
import ListClients from "@app/components/clients/List";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Page() {
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/clients`, fetcher);
  return (
    <>
      <div className="p-6 h-screen">
        {isLoading ? <Skeleton></Skeleton> : <ListClients clients={data} />}
      </div>
      
    </>
    
    
  );
}