CREATE TABLE form (
  id INT PRIMARY KEY AUTO_INCREMENT,
  empresa VARCHAR(100) NOT NULL,
  cnpj VARCHAR(30) NOT NULL,
  pergunta1 VARCHAR(200),
  feedback1 VARCHAR(200),
  pontos1 INT(2),
  pergunta2 VARCHAR(200),
  feedback2 VARCHAR(200),
  pontos2 INT(2),
  pergunta3 VARCHAR(200),
  feedback3 VARCHAR(200),
  pontos3 INT(2),
  pergunta4 VARCHAR(200),
  feedback4 VARCHAR(200),
  pontos4 INT(2),
  pergunta5 VARCHAR(200),
  feedback5 VARCHAR(200),
  pontos5 INT(2),
  pergunta6 VARCHAR(200),
  feedback6 VARCHAR(200),
  pontos6 INT(2),
  pergunta7 VARCHAR(200),
  feedback7 VARCHAR(200),
  pontos7 INT(2),
  pergunta8 VARCHAR(200),
  feedback8 VARCHAR(200),
  pontos8 INT(2),
  pergunta9 VARCHAR(200),
  feedback9 VARCHAR(200),
  pontos9 INT(2),
  pergunta10 VARCHAR(200),
  feedback10 VARCHAR(200),
  pontos10 INT(2),
  pergunta11 VARCHAR(200),
  feedback11 VARCHAR(200),
  pontos11 INT(2),
  pergunta12 VARCHAR(200),
  feedback12 VARCHAR(200),
  pontos12 INT(2),
  pergunta13 VARCHAR(200),
  feedback13 VARCHAR(200),
  pontos13 INT(2),
  pergunta14 VARCHAR(200),
  feedback14 VARCHAR(200),
  pontos14 INT(2),
  pergunta15 VARCHAR(200),
  feedback15 VARCHAR(200),
  pontos15 INT(2),
  pergunta16 VARCHAR(200),
  feedback16 VARCHAR(200),
  pontos16 INT(2),
  pergunta17 VARCHAR(200),
  feedback17 VARCHAR(200),
  pontos17 INT(2),
  pergunta18 VARCHAR(200),
  feedback18 VARCHAR(200),
  pontos18 INT(2),
  pergunta19 VARCHAR(200),
  feedback19 VARCHAR(200),
  pontos19 INT(2),
  pergunta20 VARCHAR(200),
  feedback20 VARCHAR(200),
  pontos20 INT(2)
);

CREATE TABLE movies(
  title VARCHAR(50) NOT NULL,
  genre VARCHAR(30) NOT NULL,
  director INT(60) NOT NULL,
  release_year INT NOT NULL,
  PRIMARY KEY(title)
);

INSERT INTO teste (nome, email, data_nascimento, telefone)
VALUES (junior, nidfgdf80@gmail.com, 1995-08-31, 3265-dd87);