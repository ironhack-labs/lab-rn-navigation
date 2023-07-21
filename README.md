![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Lab | React Native - React Navigation

## Learning Goals

This exercise allows you to practice and apply the concepts and techniques taught in class.

Upon completion of this exercise, you will be able to:

- Use basic React Native components.
- Create custom styles with StyleSheet.
- Handle screen navigation with React Navigation.
- Utilize the Stack Navigator to define the screens of our application.
- Pass data between screens.
- Use TypeScript to type the different screens of our application.

## Introduction

In this exercise, we will create a stack navigator with React Navigation that allows us to navigate between 3 screens: a home screen, a profile screen, and a team members screen. On the home screen, we will create a menu with different buttons that enable us to navigate to the various screens of our application. On the profile screen, we will display user information. On the settings screen, we will show a form that allows us to edit the user's information. On the team members screen, we will display a list of team members.

## Requirements

- Fork this repo.
- Clone this repo.
- Run `nvm use` to use the node version specified into the `.nvmrc` file.

```bash
nvm use
```

- Install the dependencies.

```bash
npm install
```

- Start the project.

```bash
npm run ios
npm run android
```

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "done"
git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Example

This is how the app should looks like:

![example](./assets/Navigation.GIF)

## Instructions

### Iteration 1: Install Stack Navigator

- Install React Navigation and its dependencies.
- Install Stack Navigator.

### Iteration 2: Create the necessary folders and files

- Create a folder named `src` in the project's root directory.
- Create a folder named `screens` inside the `src` folder.
- Create a folder named `components` inside the `src` folder.
- Create a folder named `navigation` inside the `src` folder.

### Iteration 3: Use NavigationContainer and create the Stack Navigator

- Import `NavigationContainer` from `@react-navigation/native`.
- Import `createStackNavigator` from `@react-navigation/stack`.
- Set up the structure of the Stack Navigator.
- Use `NavigationContainer` to wrap the Stack Navigator.
- Use `createStackNavigator` to create the Stack Navigator.

### Iteration 4: Create the application screens and add them to the Stack Navigator

- Create a home screen.
- Create a profile screen.
- Create a team members screen.
- Add the screens to the Stack Navigator.

### Iteration 5: Create the menu for the home screen

- Create a menu with different buttons that allow us to navigate to the various screens of our application.

### Iteration 6: Create the profile screen

- Create a profile screen that displays user information.
- This screen should receive user information as props. The information should be an object with the following properties: `name`, `lastName`, `email`, `phone`, `avatar`.
- This screen should display the user information; you can create a `UserCard` component to show the user's information.
- This screen should have a button that allows us to navigate to the home screen.

### Iteration 7: Create the team members screen

- Create a team members screen that displays a list of team members.
- This screen should receive team members' information as props. The information should be an array of objects with the following properties: `name`, `lastName`, `email`, `phone`, `avatar`.
- This screen should display the team members' information; you can create a `UserCard` component to show the information of a team member.
- This screen should have a button that allows us to navigate to the home screen.

### Bonus Iteration:

- Create the interface for `createStackNavigator` to type the screens of our application.

- Create the interface for `UserCard` to type the `UserCard` component.

Happy coding! 💙
