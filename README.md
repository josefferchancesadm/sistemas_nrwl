

# Sistemas

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@sistemas/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.



## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

# sincronizando alterações no github

- git add * (adiciona os novos e arquivos alterados)
- git commit -m "mensagem" (prepara os arquivos no branch'main')
- git push -u origin main (sobe pro repositorio do github)

# configurações extras

- Lembre-se de instalar primeiro o Angular cli  para seguir as instalações posteriores
- npm install -g angular@cli 

- instalações após projeto pronto
- npm install --save @nestjs/typeorm typeorm 

- conforme o site do nestjs (https://docs.nestjs.com/techniques/database)
- DRIVERS CONECCAO (mysql2,mssql e tedious e etc). Cada banco tem o seu driver de conecção.
  - npm install --save mssql tedious

# Use o gerador de modelos de Entitade do typeorm *typeorm-model-generator

instale global e siga as instrações para geração (https://www.npmjs.com/package/typeorm-model-generator)

- Nota: Apos gerar as entidades, elas se encontraram na pasta output/entities na raiz do projeto. Renomeie o final dos arquivos das entidades. ex: .ts para .entity.ts. Ao renomear verifique os relacionamentos para corrigir o caminho do arquivo renomeado.

# Testando a conecção com o banco

conforme o site do nestjs (https://docs.nestjs.com/techniques/database)

- Configurações feitas no apps/api/src/app/app.module.ts 
- exe.: TyperOrmModule.forRoot
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'caminho servidor',
      port: 1433,
      username: '',
      password: '',
      database: '',
      "options": {
          "encrypt": true,
          "enableArithAbort": true
      },
      entities: [
                 //Users,
                 //Roles,
                 //UserRoles,
                 ...ACESSOS_ENTITIES,
                 Clients,
                 Adresses],
      //synchronize: true,
    })

- Nota: De acordo que as entidade forem criadas e estruturadas, coloque as entidade no parametro.
entities:[], como mostra o exemplo anterior.

# CRIANDO A LIBRARY ENTITIES E INTERFACES

- 1 Use o gerador Nx Console do narval que se encontra na barra lateral esquerda para configurações básicas de criação de library.
 - Clique na opção Generate em (GENERATE & RUN TARGET) escolha @nrwl/node:library
 - Preencha os campos de acordo área do projeto. [Library name](nome da library): ex. entities, [directory](diretorio raiz dentro de libs): ex financeiro, [importPath](@myorg/my-awesome-lib: Nome usado pela library p/ importar nos projetos): ex. @sistemas/financeiro-entities.
 - exemplo dos arquivos gerados e atualizados após clicar no botão (RUN).
 - CREATE libs/financeiro/entities/README.md
 - CREATE libs/financeiro/entities/src/index.ts
 - CREATE libs/financeiro/entities/src/lib/financeiro-entities.spec.ts
 - CREATE libs/financeiro/entities/src/lib/financeiro-entities.ts 
 - CREATE libs/financeiro/entities/tsconfig.json
 - CREATE libs/financeiro/entities/.eslintrc.json
 - CREATE libs/financeiro/entities/jest.config.js
 - CREATE libs/financeiro/entities/tsconfig.spec.json
 - UPDATE tsconfig.base.json
 - UPDATE angular.json
 - UPDATE nx.json
 - UPDATE package.json
 - UPDATE .vscode/extensions.json
 - UPDATE jest.config.js

 - NOTA: Use o mesmo procedimento para criar a interfaces. [Library name](nome da library): ex. interfaces, [directory](diretorio raiz dentro de libs): ex financeiro, [importPath](@myorg/my-awesome-lib: Nome usado pela library p/ importar nos projetos): ex. @sistemas/financeiro-interfaces. Após criados ambos, eles estaram mapeados nos arquivos tsconfig.base.json, angular.json, nx.json e package.json.

- 2 Copie o arquivo das entidades geradas  pelo *typeorm-model-generator em output/entities para a pasta criada anteriormente. ex. libs/financeiro/entities/src/lib/ onde se encontraram as entidades relacionadas ao local de criação. Próximo passo e atualizar o arquivo libs/financeiro/entities/src/index.ts para exportar a entidade criada ex. (export * from './lib/nome-entidade.entity';).

- 3 Após criado a entidade, copie a entidade para a pasta das interfaces ex. libs/financeiro/interfaces/src/lib/ e renomeio para nome.interfaces.ts. e modelo o arquivo como mostra abaixo;

## exemplo de modelo de interfaces.
  import { LocalDateTime } from '@js-joda/core'; (@js-joda, lib usada para manipular data/hora timezone, instale pelo npm i --save js-joda)

  export interface IUsers {
    id?: number;
    username?: string | null;
    email?: string | null;
    password?: string | null;
    createdAt: LocalDateTime;
    updatedAt: LocalDateTime;
  }

  export class MUsers implements IUsers {
    public id?: number;
    public username?: string | null;
    public email?: string | null;
    public password?: string | null;
    public createdAt: LocalDateTime;
    public updatedAt: LocalDateTime;

    constructor(params?: Partial<IUsers>) {
      this.id = params?.id ?? null;
      this.username = params?.username ?? null;
      this.email = params?.email ?? null;
      this.password = params?.password ?? null;
      this.createdAt = params?.createdAt ?? LocalDateTime.now();
      this.updatedAt = params?.updatedAt ?? LocalDateTime.now();
    }
  }
# lembre-se do ? para as propriedades não obrigatórias.
- NOTA: atualize o arquivo libs/financeiro/interfaces/src/index.ts para exportar a interface criada. ex.export * from './lib/Users.interface';. Próximo passo e atualizar a entitdade para implementar da interface. ex. 

- import type { IUsers } from '@sistemas/acessos-interfaces';
- @Entity("users", { schema: "dbo" })
- export class Users implements IUsers {

- 4 Importe a entidade para apps/api/src/app/app.module.ts, para parte de entities:[] do TypeOrmModule.forRoot.


# CRIANDO A LIBRARY DO MODULO DO CONTROLLERS

- 1 Use o gerador Nx Console do narval que se encontra na barra lateral esquerda para configurações básicas de criação de library.
 - Clique na opção Generate em (GENERATE & RUN TARGET) escolha @nrwl/nest:library
 - Preencha os campos de acordo área do projeto. [name](*Library name): ex. controllers, [directory](A directory where the app is placed): ex. financeiro, [importPath](The library name used to import it, like @myorg/my-awesome-lib.): @sistemas/financeiro-controllers. Confira o caminho se está correto e execute o (RUN).
 - NOTA: este diretório contem o arquivo de module.ts. exemplo:
 - CREATE libs/financeiro/controllers/README.md
 - CREATE libs/financeiro/controllers/src/index.ts
 - CREATE libs/financeiro/controllers/tsconfig.json
 - CREATE libs/financeiro/controllers/tsconfig.lib.json
 - CREATE libs/financeiro/controllers/.eslintrc.json
 - CREATE libs/financeiro/controllers/jest.config.js
 - CREATE libs/financeiro/controllers/tsconfig.spec.json
 - CREATE libs/financeiro/controllers/src/lib/financeiro-controllers.module.ts
 - UPDATE tsconfig.base.json
 - UPDATE angular.json
 - UPDATE nx.json
 - UPDATE package.json
 - UPDATE .vscode/extensions.json
 - UPDATE jest.config.js

 - NOTA: Apos criado o module, ele deve ser importado para app.module.ts na aplicacao da api. ex.  apps\api\src\app\app.module.ts

 import { AcessosControllersModule } from '@sistemas/acessos-controllers';

 @Module({
  imports: [
    TypeOrmModule.forRoot({....}),
    AcessosControllersModule
  ]

# CRIANDO SERVIÇOS E CONTROLLER DA ENTIDADE DENTRO (MODULO DO CONTROLLERS ANTERIORMENTE)

- 1 (Service) Use o gerador Nx Console do narval que se encontra na barra lateral esquerda para configurações básicas.
 - Clique na opção Generate em (GENERATE & RUN TARGET) escolha @nestjs/schematics:service
 - Preencha os campos de acordo área do projeto. [name](*The name of the service): ex. nome-entidade, [path](The path to create the service): ex. src/lib, [sourceRoot](Nest service source root directory): ex. libs/financeiro/controllers, e desmarque spec p não gerar arquivos .spec e execute (RUN).
 - exemplo de arquivo criado. libs/financeiro/controllers/src/lib/nome-entidade/nome-entidade.service.ts

- 2 (Controller) Use o gerador Nx Console do narval que se encontra na barra lateral esquerda para configurações básicas.
 - Clique na opção Generate em (GENERATE & RUN TARGET) escolha @nestjs/schematics:controller
 - Preencha os campos de acordo área do projeto. [name](*The name of the controller): ex. nome-entidade, [module](Allows specification of the declaring module): ex. financeiro, [path](The path to create the controller): ex. src/lib, [sourceRoot](Nest controller source root directory): ex. libs/financeiro/controllers, e desmarque spec p não gerar arquivos .spec e execute (RUN).
 - exemplo de arquivo criado. libs/financeiro/controllers/src/lib/nome-entidade/nome-entidade.controller.ts.

 # ESTRUTURANDO ARRAY DE ENTIDADES NO TYPEORMMODULE forROOT (APPS)

 - NOTA: Em vez de importar todas as entidades para parte de entities:[] do TypeOrmModule.forRoot. da aplicação (apps/api/src/app/app.module.ts), deixando muito grande de acordo com aplicação cresce, podemos enxugar o app.module.ts. Siga os passos a seguir.
  - 1 Crie um arquivo entities.ts na raiz ex. libs/acessos/entities/src, e importe as entidades conforme abaixo:
    import { Users } from './lib/Users.entity';
   
    import { Roles } from './lib/Roles.entity';
   
    import { UserRoles } from './lib/UserRoles.entity';

    export const ACESSOS_ENTITIES = [
      Users,
      Roles,
      UserRoles
    ]

  - 2 Com arquivo criado, abra o arquivo libs/acessos/entities/src/index.ts e exporte o arquivo anterior, colocando em primeiro da lista:
      
    export * from './entities';
   
    export * from './lib/acessos-entities';
   
    export * from './lib/Users.entity';
   
    export * from './lib/Roles.entity';
   
    export * from './lib/UserRoles.entity';

  - 3 Abra o arquivo apps/api/src/app/app.module.ts, e importe import { ACESSOS_ENTITIES } from '@sistemas/acessos-entities'; e implemente a tag entities:[ ...ACESSOS_ENTITIES ], na configuração do forRoot. 
   -NOTA: ...ACESSOS_ENTITIES indica que se trata de um array de entidades;


# VALIDAÇÕES DINAMICAS EM (Reactive Form, Template Driven Form e Model Based Form) 

instale e use todos os modelos de validações conforme mostra o site.(https://www.npmjs.com/package/@rxweb/reactive-form-validators)

npm install @rxweb/reactive-form-validators

 - NOTA: Em nossos exemplos, usamos o validador @prop(),@required({ message: '"Tipo Documento" é obrigatório.' }), na parte do modelo na interface. ex. libs\acessos\interfaces\src\lib\Users.interface.ts. 
 - Na parte da criação dos formularios, importamos para os modulos nas libs por parte do frontend.
 
 import { FormsModule, ReactiveFormsModule} from '@angular/forms'; // <-- #1 import module
 
 import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators'; // <-- #2 import module

 imports:[ BrowserModule, 
    FormsModule,
    ReactiveFormsModule, 
    RxReactiveFormsModule
    ] 

# CRIANDO A LIBRARY SERVICE E O SERVIÇO DAS ENTIDADES (FRONT-END)  

- 1 (ESTRUTURA LIBRARY SERVICE) Use o gerador Nx Console do narval que se encontra na barra lateral esquerda para configurações básicas de criação de library.
 - Clique na opção Generate em (GENERATE & RUN TARGET) escolha @nrwl/node:library
 - Preencha os campos de acordo área do projeto. [Library name](nome da library): ex. services, [directory](diretorio raiz dentro de libs): ex acessos, [importPath](@myorg/my-awesome-lib: Nome usado pela library p/ importar nos projetos): ex. @sistemas/acessos-services.

ng generate @nrwl/node:library --name=services --directory=acessos --importPath=@sistemas/acessos-services --no-interactive --dry-run <

  - CREATE libs/acessos/services/README.md
  - CREATE libs/acessos/services/src/index.ts
  - CREATE libs/acessos/services/src/lib/acessos-services.spec.ts
  - CREATE libs/acessos/services/src/lib/acessos-services.ts
  - CREATE libs/acessos/services/tsconfig.json
  - CREATE libs/acessos/services/tsconfig.lib.json
  - CREATE libs/acessos/services/.eslintrc.json
  - CREATE libs/acessos/services/jest.config.js
  - CREATE libs/acessos/services/tsconfig.spec.json
  - UPDATE tsconfig.base.json
  - UPDATE angular.json
  - UPDATE nx.json
  - UPDATE package.json
  - UPDATE .vscode/extensions.json
  - UPDATE jest.config.js


- 2 (SERVICE ENTIDADE) Use o gerador Nx Console do narval que se encontra na barra lateral esquerda para configurações básicas de criação de library.
 - Clique na opção Generate em (GENERATE & RUN TARGET) escolha @schematics/angular:service
 - Preencha os campos de acordo área do projeto. [name](The name of the service.): ex. users, [project](the name of the project): ex services, [Path]: libs/acessos/services/src/lib, e marque skipTests para não gerar arquivo spec.ts
  
  - CREATE libs/acessos/services/src/lib/users.service.ts


Nrwl/angular:library
schematics/angular:modulo
schematics/angular:component

ng generate @schematics/angular:component --name=acessos-front 
--project=acessos --module=acessos-front --style=scss 
--displayBlock --export --flat --path=libs/acessos/front/src/lib --skipTests <

ng generate @schematics/angular:module --name=users --project=acessos 
--module=@sistemas/acessos-front --path=libs/acessos/front/src/lib --route=users <

ng generate @schematics/angular:component --name=users-query 
--project=acessos --module=users --style=scss 
--displayBlock --export --path=libs/acessos/front/src/lib/users 
--selector=users-edit --skipTests --no-interactive --dry-run
