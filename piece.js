class Piece{
    constructor(piece, x, y, color, dead){
        this.piece = piece;
        this.x = x;
        this.y = y;
        this.color = color;
        this.dead = dead;
    }
    get_html(){
        switch(this.piece){
            case ChessPiece.KING:
                if(this.color == 'white'){
                    return "<img src='img/Chess_klt60.png' alt='White King' class='piece' id='white-king'>"
                }
                else{
                    return "<img src='img/Chess_kdt60.png' alt='Black King' class='piece' id='black-king'>"
                }
            case ChessPiece.QUEEN:
                if(this.color == 'white'){
                    return "<img src='img/Chess_qlt60.png' alt='White Queen' class='piece' id='white-queen'>"
                }
                else{
                    return "<img src='img/Chess_qdt60.png' alt='Black Queen' class='piece' id='black-queen'>"
                }
            case ChessPiece.ROOK:
                if(this.color == 'white'){
                    return "<img src='img/Chess_rlt60.png' alt='White Rook' class='piece' id='white-rook'>"
                }
                else{
                    return "<img src='img/Chess_rdt60.png' alt='Black Rook' class='piece' id='black-rook'>"
                }
            case ChessPiece.BISHOP:
                if(this.color == 'white'){
                    return "<img src='img/Chess_blt60.png' alt='White Bishop' class='piece' id='white-bishop'>"
                }
                else{
                    return "<img src='img/Chess_bdt60.png' alt='Black Bishop' class='piece' id='black-bishop'>"
                }
            case ChessPiece.KNIGHT:
                if(this.color == 'white'){
                    return "<img src='img/Chess_nlt60.png' alt='White Knight' class='piece' id='white-knight'>"
                }
                else{
                    return "<img src='img/Chess_ndt60.png' alt='Black Knight' class='piece' id='black-knight'>"
                }
            case ChessPiece.PAWN:
                if(this.color == 'white'){
                    return "<img src='img/Chess_plt60.png' alt='White Pawn' class='piece' id='white-pawn'>"
                }
                else{
                    return "<img src='img/Chess_pdt60.png' alt='Black Pawn' class='piece' id='black-pawn'>"
                }
        }
    }
    get_coords_possible_moves(){
        let possible_moves = [];
        switch(this.piece){
            case ChessPiece.KING:
                possible_moves = this.get_king_moves();
                break;
            case ChessPiece.QUEEN:
                possible_moves = this.get_queen_moves();
                break;
            case ChessPiece.ROOK:
                possible_moves = this.get_rook_moves();
                break;
            case ChessPiece.BISHOP:
                possible_moves = this.get_bishop_moves();
                break;
            case ChessPiece.KNIGHT:
                possible_moves = this.get_knight_moves();
                break;
            case ChessPiece.PAWN:
                possible_moves = this.get_pawn_moves();
                break;
        }
        return possible_moves;
    }
    get_king_moves(){
        let possible_moves = [];
        possible_moves.push({x: this.x + 1, y: this.y - 1});
        possible_moves.push({x: this.x + 1, y: this.y});
        possible_moves.push({x: this.x + 1, y: this.y + 1});
        possible_moves.push({x: this.x - 1, y: this.y - 1});
        possible_moves.push({x: this.x - 1, y: this.y});
        possible_moves.push({x: this.x - 1, y: this.y + 1});
        possible_moves.push({x: this.x, y: this.y - 1});
        possible_moves.push({x: this.x, y: this.y + 1});
        return possible_moves;
    }
    get_queen_moves(){
        let possible_moves = [];
        possible_moves = possible_moves.concat(this.get_rook_moves());
        possible_moves = possible_moves.concat(this.get_bishop_moves());
        return possible_moves;
    }
    get_rook_moves(){
        let possible_moves = [];
        for(let i = 1; i < 8; i++){
            if(this.x + i < 8){
                possible_moves.push({x: this.x + i, y: this.y});
            }
            if(this.x - i >= 0){
                possible_moves.push({x: this.x - i, y: this.y});
            }
            if(this.y + i < 8){
                possible_moves.push({x: this.x, y: this.y + i});
            }
            if(this.y - i >= 0){
                possible_moves.push({x: this.x, y: this.y - i});
            }
        }
        return possible_moves;
    }
    get_bishop_moves(){
        let possible_moves = [];
        for(let i = 1; i < 8; i++){
            if(this.x + i < 8 && this.y + i < 8){
                possible_moves.push({x: this.x + i, y: this.y + i});
            }
            if(this.x + i < 8 && this.y - i >= 0){
                possible_moves.push({x: this.x + i, y: this.y - i});
            }
            if(this.x - i >= 0 && this.y + i < 8){
                possible_moves.push({x: this.x - i, y: this.y + i});
            }
            if(this.x - i >= 0 && this.y - i >= 0){
                possible_moves.push({x: this.x - i, y: this.y - i});
            }
        }
        return possible_moves;
    }
    get_knight_moves(){
        let possible_moves = [];
        possible_moves.push({x: this.x + 1, y: this.y - 2});
        possible_moves.push({x: this.x + 2, y: this.y - 1});
        possible_moves.push({x: this.x + 2, y: this.y + 1});
        possible_moves.push({x: this.x + 1, y: this.y + 2});
        possible_moves.push({x: this.x - 1, y: this.y + 2});
        possible_moves.push({x: this.x - 2, y: this.y + 1});
        possible_moves.push({x: this.x - 2, y: this.y - 1});
        possible_moves.push({x: this.x - 1, y: this.y - 2});
        return possible_moves;
    }
    get_pawn_moves(){
        let possible_moves = [];
        if(this.color == 'white'){
            possible_moves.push({x: this.x, y: this.y - 1});
            if(this.y == 6){
                possible_moves.push({x: this.x, y: this.y - 2});
            }
        }
        else{
            possible_moves.push({x: this.x, y: this.y + 1});
            if(this.y == 1){
                possible_moves.push({x: this.x, y: this.y + 2});
            }
        }
        return possible_moves;
    }
}
