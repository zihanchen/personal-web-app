import { Flex, Button, Heading} from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { CookiesProvider, useCookies } from "react-cookie";


export default function ConnectFour() {
      // const api_url = "https://082q4pe6xa.execute-api.us-east-2.amazonaws.com/Test";
      // const post_url = "http://127.0.0.1:5000";
      const gateway_url = "https://082q4pe6xa.execute-api.us-east-2.amazonaws.com/Test"

      // const [data, setData] = useState('');
      const [board, setBoard] = useState([[]]);
      const [boardsize, setSize] = useState(0);
      const [cookies, setCookie] = useCookies(['uid']);
      const [player, setPlayer] = useState(1)
      const CELL_SIZE = 45;
      const MARGIN = 5;

      const Shape = ({ type, x, y }) => {
        switch (type) {
          case ".": 
            return <rect id="shape" x={x} y={y} width={CELL_SIZE} height={CELL_SIZE} fill="#ebaee6" />;
          case "o":
            return <circle id="shape" cx={x + CELL_SIZE / 2} cy={y + CELL_SIZE / 2} r={CELL_SIZE / 2.5} fill="#ff857a" />;
          case "x": 
            return (
              <g>
                <line x1={x + MARGIN} y1={y + MARGIN} x2={x + CELL_SIZE - MARGIN} y2={y + CELL_SIZE - MARGIN} stroke="#6b403c" strokeWidth="5" />
                <line x1={x + CELL_SIZE - MARGIN} y1={y + MARGIN} x2={x + MARGIN} y2={y + CELL_SIZE - MARGIN} stroke="#6b403c" strokeWidth="5" />
              </g>
            );
          default:
            return null;
        }
      };

      const Board = ({ board }) => {
        return (
          <svg width={board[0].length * CELL_SIZE} height={board.length * CELL_SIZE}>
            {board.map((row, rowIndex) =>
              row.map((cell, colIndex) => (
                <Shape key={`${rowIndex}-${colIndex}`} type={cell} x={colIndex * CELL_SIZE} y={rowIndex * CELL_SIZE} />
              ))
            )}
          </svg>
        );
      };

      const ButtonGenerator = ({ n, func }) => {
        return (
          <div>
            {Array.from({ length: n }, (_, i) => i + 1).map((num) => (
              <Button key={num} onClick={() => func(num)}>
                {num}
              </Button>
            ))}
          </div>
        );
      };

      // useEffect(() => {
      //   axios.get(api_url + "/data")
      //       .then(response => {
      //           console.log(response);
      //           setData(response.data.body);
                
      //       })
      //       .catch(error => {
      //           console.error('Error fetching data:', error);
      //       });
      // }, []);

      function initBoard(size) {
        var setupButton, i;
        setupButton = document.getElementsByClassName("selectBoard")
        
        setSize(size);
        for (i = 0; i < setupButton.length; i ++) {
          setupButton[i].style.display = "none";
        }
        axios.post(gateway_url + "/connectfour/init", {
          'board_size': size,
          'uid': cookies.uid
        })
        .then(response => {
          console.log(response)
          setBoard(response.data.board);
          setCookie('uid', response.data.uid, { path: '/' })
        })
      }

      function makeMove(column) {
        console.log("trying to move")
        console.log(column)
        axios.post(gateway_url + "/connectfour/move", {
          'move': column,
          'uid': cookies.uid,
          'player': player
        })
        .then(response => {
          console.log(response.data.board)
          setBoard(response.data.board)
          setPlayer(0 - player)
        })
      }

      return (
        <Flex direction="column">
            <Heading level={1}>Connect Four</Heading>
            <Flex direction={"row"}>
                <Button className="selectBoard" onClick={() => initBoard(8)}>8 x 8</Button>
                <Button className="selectBoard" onClick={() => initBoard(10)}>10 x 10</Button>
                <Button className="selectBoard" onClick={() => initBoard(16)}>16 x 16</Button>
            </Flex>
            {/* <Flex direction="column" gap="0.001rem"> 
                {board.map((items) => {
                  
                  return <Flex direction="row" gap="1.3rem">{items.map((subItems) => {
                    return <View>{subItems}</View>
                  })}</Flex>;
                })}
            </Flex> */}
            <Board board={board} />
            <Flex direction="row">
              <ButtonGenerator n={boardsize} func={makeMove} />
            </Flex>
        </Flex>
      )
}