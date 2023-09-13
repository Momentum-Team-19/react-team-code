# React Memory Card Game: Team Edition

Today during our meeting we shall "mob code" a small project together. "Mob programming" is a strategy for writing code with multiple contributors -- like pair programming, but you have more than two people.

You may not be able to finish everything you envision in the time allotted, so **prioritize** and decide together where to start and what to do later.

## 🏆  The challenge

Finish the minimum gameplay of the app during our meeting today. 


## The project

This project is a single-page application game based on the classic matching card game [concentration](https://en.wikipedia.org/wiki/Concentration_(card_game)).

The UI will show a series of cards with a front and back. The back of each is the same. The front has some color. Each color is used twice. You should have 12 squares, with the following colors repeated twice: red, orange, yellow, green, blue, purple. 

### Gameplay

Shuffle the cards and present them to the user face down. When the user clicks a card, show it face up. When the user clicks a second, show it face-up as well. If the two face-up cards match, the two squares are marked as correct and are disabled from further clicks. If the two do not match, the user is shown that they are incorrect and they are both turned face-down again.

The game should not start until the first selection is clicked. When the user has gotten all selections right, show the user they've won.

## 💅 Styling

You will need to add some basic styling to make the game usable, but don't get bogged down in CSS at the expense of funtionality. You can use a library if you like.

## 🌶️ Spicy options

- Animate the card flip.
- Add a timer to the game and show the user how long it took them to win.
- Keep track of previous speed records (you can use [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) for this).


## Mob programming rules

1. Each person must verbally contribute to the code being produced. This means that each person must actively communicate, and that a conscious effort must be made to balance the contributions of those who are more and less vocal.
3. As always, our discussion will be guided by our respect for each other and our mutual agreement to protect our safe learning space.
4. Cameras must stay on throughout the session.
5. Each person has an assigned role. The roles will shift every 10 minutes. Roles and rules for switching are described below.
6. Only the driver changes code during a shift. No one else is typing code at the same time.
7. Do not copy and paste code into the project. The driver must type all code.
8. No AI code generation. You can use AI to answer questions, but not to generate code.
9. Take at least one break during the session. The moderator should suggest a break at least once.

### Switch roles in shifts

We'll shift roles at 10-minute intervals. Each person will have a chance to occupy every role. When we reach the last shift, we will start over and repeat the cycle.

If anyone needs to take a break or step away, their role can be filled by one of the Individual Contributors for that round.

At the beginning of each shift, pull down all the code from the repo. The driver should share their screen (or live share in vs code).

🔴 **At the end of each shift**, the driver should add, commit, and push all the code that has been written.

🟢 **At the beginning of each shift**, the new driver should pull down the code that has been pushed (`git pull origin main`).


Some things to keep in mind:

- **It's 100% ok to be wrong about something.**
- **It's 100% ok not to know something.**
- **Try things even if you are not sure they are right.**
- **Move swiftly and be decisive even if you are uncertain.**
- **Use the console to try things out if you aren't sure of syntax.**
- **Use React dev tools and `console.log`**
- **Just jump in and throw out some ideas!**

### The roles

#### 🚘 **The Driver**

The Driver shares their screen and does the typing. In this role, you are mainly a conduit for the ideas of the group, implementing what the Navigator asks you to. The code the driver writes is suggested by the rest of the team, not independently created.

#### 🗺️ **The Navigator**

The Navigator leads the way, making decisions based on the input of the group about what to do and giving direction about what to type to the Driver. They may ask the Scout and Individual Contributors for help as needed.

#### ⚖️ **The Moderator**

The job of the Moderator is to keep everyone focused and on task and **be sure all voices are heard**. The Moderator should make sure that everyone is participating and that no one is dominating the conversation. One way to do this is to invite someone who has not spoken to share their thoughts.

The Moderator asks pertinent questions to generate ideas or unblock progress, asks the Scout to look things up, and in general keeps things moving forward in cooperation with the Navigator. This person may also suggest breaks as needed, making sure that a break is taken at least once.

The Moderator keeps time so that roles can shift on schedule. ⏲️

#### 🔭 **The Scout**

The Scout is responsible for looking up syntax, error messages, documentation, and examples and may be asked to do that by anyone on the team. They may also make suggestions for things to try if they find relevant examples online. Any online source is valid; you may use AI tools to answer questions or provide examples, but not to generate code.

👩🏽‍💻 👨🏻‍💻 👨🏿‍💻 👩🏼‍💻 **The Individual Contributors**

These developers make suggestions to the Navigator, the Driver, and the Scout, and offer helpful advice as needed. The Navigator and Moderator may ask them directly for their input.

---

## The Shifts

### shift 1

- driver: Nathan
- navigator: Chris
- moderator: Gavin
- scout: Jaylan
- contributor: Davis

### shift 2

- driver: Chris
- navigator: Gavin
- moderator: Jaylan
- scout: Davis
- contributors: Nathan

### shift 3

- driver: Gavin
- navigator: Jaylan
- moderator: Davis
- scout: Nathan
- contributors: Chris

### shift 4

- driver: Jaylan
- navigator: Davis
- moderator: Nathan
- scout: Chris
- contributors: Gavin

### shift 5

- driver: Davis
- navigator: Nathan
- moderator: Chris
- scout: Gavin
- contributors: Jaylan

### shift 6 -> start over at shift 1
