const CommentShowLine = ({data}) =>{
    const [blocks, setBlocks] = useState([]);
    
      useEffect(() => {
        const interval = setInterval(createRandomBlock, 2000);
        return () => clearInterval(interval);
      }, []);
    
      const createRandomBlock = () => {
        if (data.length === 0) {
          return; // Перевірка на пустий масив даних
        }
        const left = Math.floor(Math.random() * 500); // Змініть це, якщо потрібно
        const top = Math.floor(Math.random() * 500); // Змініть це, якщо потрібно
        const side = Math.floor(Math.random() * 2); // Змініть це, якщо потрібно
    
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomData = data[randomIndex];
    
        setBlocks((prevBlocks) => [
          ...prevBlocks,
          {
            side:side,
            data:randomData,
            left: left + 'px',
            top: top + 'px',
            id: new Date().getTime(), // Унікальний ідентифікатор
          },
        ]);
    
        setTimeout(() => {
          setBlocks((prevBlocks) => prevBlocks.slice(1));
        }, 7000); // Змініть це, якщо потрібно
      };
    
      return (
          blocks.map((block) => (
            <div
              key={block.id}
              className={`comment ${block.side ? "_left" : "_right"}`}
              style={{ left: block.left, top: block.top}}
            >{block.data}<span></span></div>
          ))
      );
  }

  export {CommentShowLine}