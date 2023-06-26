# NestJs-Application

Tutorial for a NestJs application development<br>

#BASE CREATION:<br>

0 - Install globally: npm install -g @nestjs/cli <br>
1 - Clone a empty repository <br>
2 - type: nest new <project-name> <br>
3 - enter the folder > cd ... <br>
4 - type: npm run start:dev > to start application <br>
5 - type: nest g resource users modules > Choose REST API > Y <br>
6 - type: npm install @nestjs/mapped-types <br>
7 - type: npm install --save-dev @types/node <br>

# ADDING ENTITIES FLUX:<br>

8 - Create the entities. <br>
9 - Create database folder inside src, and also db.ts inside of it<br>
10 - Inside create.user.dto fill the fields with entity info<br>
11 - Create a repository folder inside entity module <br>
12 - Create in-memory folder, inside it: users.in-memory.repository.ts <br>
13 - In users.module.ts > Import repository in providers array <br>
14 - fill the users.service.ts

App is now running. <br>
