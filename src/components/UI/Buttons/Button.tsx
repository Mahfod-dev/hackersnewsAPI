type ButtonProps = {
  setPage : React.Dispatch<React.SetStateAction<number>>
  page:number

}

export const Button = ({setPage,page}:ButtonProps) => {

return (
    <div>
      <button disabled={page <=1} onClick={() => setPage((prev)=> prev - 1)}>
       Previous Page ({page})
      </button>
      <button disabled={page >= 10} onClick={()=> setPage((prev)=> prev + 1)}>
       Next Page ({page + 1})
      </button>

    </div>
  )
}