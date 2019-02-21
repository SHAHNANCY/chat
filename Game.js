const GameState = Object.freeze({
    START: Symbol("start"),
    ENTER: Symbol("enter"),
    KNOCK: Symbol("knock"),
    MOVE: Symbol("move"),
    HOME: Symbol("home"),
});
export default class Game{
    constructor(){
        this.stateCur = GameState.START;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.START:
                sReply = "Here's a game that you have to play a Maze Game. There are so many doors and there could be many ghosts you have to find right door to enter the house.";
                this.stateCur = GameState.ENTER;
                break;
                case GameState.ENTER:
                if(sInput.toLowerCase().match("enter")){
                    sReply = "Which door do you want to enter ? red or green?";
                    this.stateCur = GameState.KNOCK;
                    
                }else{
                    sReply ="There's no other way if you want to go to house, choose red or green?";
                }
                break;
                case GameState.KNOCK:
                if(sInput.toLowerCase().match("red")){
                    sReply = "Okay! you are safe to move to next door. blue or yellow ?"
                    this.stateCur = GameState.MOVE;
                }else{
                    sReply = "Ohh ! there is ghost, run away and go back and choose red";
                    this.stateCur = GameState.KNOCK;

                }
                break;
                case GameState.MOVE:
                    if(sInput.toLowerCase().match("yellow")){
                        sReply = "okay there's golden and silver door , your pick?";
                        this.stateCur = GameState.HOME;
    
                    }else{
                        sReply = "Ohh ! there is ghost, run away and go back and choose yellow";
                        this.stateCur = GameState.MOVE;
        
                    }
                    break;
                    case GameState.HOME:
                    if(sInput.toLowerCase().match("golden")){
                        sReply = "Congo ! you,ve made to your house safely.";
                        this.stateCur = GameState.HOME;
    
                    }else{
                        sReply = "You are caught, Start again.";
                        this.stateCur = GameState.ENTER;
        
                    }
                    break;
            }
            return([sReply]);
        }
    }