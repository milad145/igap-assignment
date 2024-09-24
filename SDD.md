# Before you read!

In this challenge there are some mandatory tasks and some bonus ones. Completing the mandatory tasks is required to be able to proceed with the interview process.

_**Please read the description very carefully, any excuse about misunderstanding the description is not acceptable. Before you start, if any thing is unclear, you can contact us at in [iGap](https://d.igap.net/node-code-challenge-support)!**_

# SDD (Simple dumb database)

We want to build a very simple Database! The main features of this database are:

- It stores its data on the disk. (for example a file called `data.json`).
- We should be able to store data in multiple `collections`.
- In each collection there are a number of `records`
- Each records should have a unique identifire in its collection.
- Based on an environment variable (`$SDD_STORE_TYPE`) the way it stores data should change. (The default should be json).
- It should at least support two types of storage: `JSON` and `Yaml`.

## Technologies & Dependencies

- You are required to use [`Nest.js`](https://docs.nestjs.com/) + [`Typescript`](https://www.typescriptlang.org/).
- You are allowed to use [any third party dependencies](https://www.npmjs.com/search?q=yaml) for working with [`yaml`](https://en.wikipedia.org/wiki/YAML) format.
- Based on your need and your API design you might need to use some dependencies, it's OK but keep in mind you should add dependencies reasonably!
- You can add as much `devDependencies` as you want.

## App architecture

Build an API to interact with the database. The API should enable a user to:

- Create and delete a table
- Insert new records in a table
- Find a record in a table
- Delete a record in a table

Here is some example of the API:

```sh
POST localhost:3000/create
{
  tableName: "myTable"
}

GET localhost:3000/myTable?limit=10&skip=0

POST localhost:3000/myTable
{
  foo: true,
  bar: "look ma! I'm building a Database"
  baz: 123
}

DELETE localhost:3000/myTable/123

PUT localhost:3000/myTable/1
{
  bar: "Yeah, let's update this thing!"
}
```

**NOTE: These are just some examples, you can architect your API however you think is the best**

## Submission

The project should include a `README.md` (You can do it in English or Persian). It should be sufficient enough for someone to read it and run the project.

After completion send the final project as a `zip` file to the email you received.

## Bonuses!

These are not required, but doing them is a huge bonus! The higher the bonus, the higher its point is.

- Support binary format for data storage
- Build a CLI app for interacting with the DB. For example:

```sh
$ node cli.js del --table myTable 1
$ node cli.js add --table myTable '{ foo: "bar" }'
$ node cli.js get --table myTable
```

**NOTE: This is just an example, you can architect your CLI app however you want**

- Unit and/or E2E Tests
- A document explaining the main architecture of your application
