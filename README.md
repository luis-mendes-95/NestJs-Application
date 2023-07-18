# PrintSquad API made with NestJS
Here's the functional API to PrintSquad Application and the instructions to create it from the scratch<br>

# NestJs-Application

Tutorial for a NestJs application development<br>

# BASE CREATION:

0 - Install globally: npm install -g @nestjs/cli <br>
1 - Clone a empty repository <br>
2 - type: nest new <project-name> <br>
3 - enter the folder > cd ... <br>
4 - type: npm run start:dev > to start application <br>
5 - type: nest g resource users modules > Choose REST API > Y <br>
6 - type: npm install @nestjs/mapped-types <br>
7 - type: npm install --save-dev @types/node <br>

# ADDING ENTITIES FLUX:<br>

8 - Create the entities > nest g resource serviceOrders modules <br>
9 - Create database folder inside src, and also db.ts inside of it<br>
10 - Inside create.user.dto fill the fields with entity info<br>
11 - Create a repository folder inside entity module <br>
12 - Create in-memory folder, inside it: users.in-memory.repository.ts <br>
13 - In users.module.ts > Import repository in providers array <br>
14 - fill the users.service.ts<br>

# VALIDATIONS AND ERRORS HANDLING:

15 - Install libraries > npm i class-validator class-transformer<br>
16 - fill main.ts with the pipe stuff, as it is here in the repository (go look there).<br>
17 - install: npm i bcryptjs<br>
18 - also: npm i @types/bcryptjs -D<br>
19 - fill create-user.dto.ts file with the informations about hashing<br>
20 - add interceptors inside entity controllers<br>

# ADDING ORM:

21 - install library: npm install @prisma/client
22 - also: npm i prisma -D
23 - run: npx prisma init
24 - set the .env with database info
25 - set the schemas.prisma
26 - set a postgre database in localhost
27 - run: npx prisma migrate dev
28 - create file: prisma.service.ts inside database folder, fill it
29 - create folder: prisma, inside each "repositories" folder.
30 - also: inside it, create file: users.prisma.repository.ts, fill it




