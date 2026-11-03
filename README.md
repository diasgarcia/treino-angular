# Treino Angular

Projeto de estudos de Angular. A Aula 01 explora a criação de componentes standalone, comunicação entre componentes com `@Input` e `@Output` e organização de estilos globais.

## Aula 01 — Componente de card

A aplicação exibe cards de alunos e instrutores e demonstra:

- criação de um componente standalone (`Card`);
- passagem de dados com `@Input()` (`nome`, `idade` e `ehInstrutor`);
- comunicação com o componente pai por meio do `@Output()` (`exibirNome`);
- estilos globais e classes utilitárias de layout.

## Tecnologias

- Angular 21
- TypeScript 5.9
- Vitest
- Prettier

## Como rodar

```bash
npm install
npm start
```

A aplicação estará disponível em `http://localhost:4200/`.

## Scripts

| Comando           | Descrição                                        |
| ----------------- | ------------------------------------------------ |
| `npm start`       | Inicia o servidor de desenvolvimento             |
| `npm run build`   | Gera o build de produção em `dist/`              |
| `npm test`        | Executa os testes unitários                      |
| `npm run watch`   | Gera o build em modo de observação               |
