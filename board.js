const ChessPiece = {
    KING: 'King',
    QUEEN: 'Queen',
    ROOK: 'Rook',
    BISHOP: 'Bishop',
    KNIGHT: 'Knight',
    PAWN: 'Pawn'
};
class GameBoard {
    board = [];

    black_pieces = [];
    white_pieces = [];

    //true = white turn, false = black turn
    turn = true;
    constructor() { };
    init() {
        let count = 0;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (count % 2 == 0) {
                    this.board.push(new Square(j, i, 'black'));
                } else {
                    this.board.push(new Square(j, i, 'white'));
                }
                count++;
            }
            count++;
        }
    }
    init_pieces() {
        this.black_pieces.push(new Piece(ChessPiece.ROOK, 0, 0, 'black', false));
        this.black_pieces.push(new Piece(ChessPiece.KNIGHT, 1, 0, 'black', false));
        this.black_pieces.push(new Piece(ChessPiece.BISHOP, 2, 0, 'black', false));
        this.black_pieces.push(new Piece(ChessPiece.QUEEN, 3, 0, 'black', false));
        this.black_pieces.push(new Piece(ChessPiece.KING, 4, 0, 'black', false));
        this.black_pieces.push(new Piece(ChessPiece.BISHOP, 4, 4, 'black', false));
        this.black_pieces.push(new Piece(ChessPiece.KNIGHT, 6, 0, 'black', false));
        this.black_pieces.push(new Piece(ChessPiece.ROOK, 7, 0, 'black', false));
        for (let i = 0; i < 8; i++) {
            this.black_pieces.push(new Piece(ChessPiece.PAWN, i, 1, 'black', false));
        }
        this.white_pieces.push(new Piece(ChessPiece.ROOK, 0, 7, 'white', false));
        this.white_pieces.push(new Piece(ChessPiece.KNIGHT, 1, 7, 'white', false));
        this.white_pieces.push(new Piece(ChessPiece.BISHOP, 2, 7, 'white', false));
        this.white_pieces.push(new Piece(ChessPiece.QUEEN, 3, 7, 'white', false));
        this.white_pieces.push(new Piece(ChessPiece.KING, 4, 7, 'white', false));
        this.white_pieces.push(new Piece(ChessPiece.BISHOP, 5, 7, 'white', false));
        this.white_pieces.push(new Piece(ChessPiece.KNIGHT, 6, 7, 'white', false));
        this.white_pieces.push(new Piece(ChessPiece.ROOK, 7, 7, 'white', false));
        for (let i = 0; i < 8; i++) {
            this.white_pieces.push(new Piece(ChessPiece.PAWN, i, 6, 'white', false));
        }
    }
    display_board() {
        $(".board_container").empty();
        this.board.forEach(square => {
            if (square.color == 'black') {
                $(".board_container").append("<div id='" + square.y.toString() + square.x.toString() + "' class='square square_black'></div>")
            } else {
                $(".board_container").append("<div id='" + square.y.toString() + square.x.toString() + "' class='square square_white'></div>")
            }
        });
    }
    update_board() {
        this.white_pieces.forEach(piece => {
            $("#" + piece.y.toString() + piece.x.toString()).html(piece.get_html());
        });
        this.black_pieces.forEach(piece => {
            $("#" + piece.y.toString() + piece.x.toString()).html(piece.get_html());
        });
    }
    get_piece(x, y) {
        let piece = null;
        this.white_pieces.forEach(white_piece => {
            if (white_piece.x == x && white_piece.y == y) {
                piece = white_piece;
            }
        });
        this.black_pieces.forEach(black_piece => {
            if (black_piece.x == x && black_piece.y == y) {
                piece = black_piece;
            }
        });
        return piece;
    }
}