// import { MongoClient, ServerApiVersion } from "mongodb";
// import dotenv from "dotenv";
// dotenv.config();

// const uri = process.env.MONGODB_URI!;
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
// const exercises = [
//   {
//     name: "Bench Press",
//     type: "Chest",
//     priority: 2,
//     sets: 3,
//     reps: 8
//   },
//   {
//     name: "Incline Dumbbell Press",
//     type: "Chest",
//     priority: 2,
//     sets: 3,
//     reps: 10
//   },
//   {
//     name: "Push-Up",
//     type: "Chest",
//     priority: 2,
//     sets: 3,
//     reps: 15
//   },
//   {
//     name: "Chest Fly",
//     type: "Chest",
//     priority: 2,
//     sets: 3,
//     reps: 12
//   },
//   {
//     name: "Cable Crossover",
//     type: "Chest",
//     priority: 2,
//     sets: 3,
//     reps: 12
//   },
//   {
//     name: "Dumbbell Pullover",
//     type: "Chest",
//     priority: 2,
//     sets: 3,
//     reps: 10
//   },
//   {
//     name: "Decline Bench Press",
//     type: "Chest",
//     priority: 2,
//     sets: 3,
//     reps: 8
//   },
//   {
//     name: "Machine Chest Press",
//     type: "Chest",
//     priority: 2,
//     sets: 3,
//     reps: 10
//   },
//   {
//     name: "Pec Deck Machine",
//     type: "Chest",
//     priority: 2,
//     sets: 3,
//     reps: 12
//   },
//   {
//     name: "Incline Cable Fly",
//     type: "Chest",
//     priority: 2,
//     sets: 3,
//     reps: 12
//   },
//   {
//     name: "Weighted Dip (Chest Focus)",
//     type: "Chest",
//     priority: 2,
//     sets: 3,
//     reps: 10
//   },
//   {
//     name: "Landmine Press",
//     type: "Chest",
//     priority: 2,
//     sets: 3,
//     reps: 10
//   },
//   {
//     name: "Pull-Up",
//     type: "Back",
//     priority: 2,
//     sets: 3,
//     reps: 8
//   },
//   {
//     name: "Deadlift",
//     type: "Back",
//     priority: 1,
//     sets: 3,
//     reps: 5
//   },
//   {
//     name: "Bent Over Row",
//     type: "Back",
//     priority: 2,
//     sets: 3,
//     reps: 10
//   },
//   {
//     name: "Lat Pulldown",
//     type: "Back",
//     priority: 2,
//     sets: 3,
//     reps: 12
//   },
//   {
//     name: "Seated Cable Row",
//     type: "Back",
//     priority: 2,
//     sets: 3,
//     reps: 10
//   },
//   {
//     name: "Single Arm Dumbbell Row",
//     type: "Back",
//     priority: 2,
//     sets: 3,
//     reps: 10
//   },
//   {
//     name: "Back Extension",
//     type: "Back",
//     priority: 2,
//     sets: 3,
//     reps: 15
//   },
//   {
//     name: "Face Pull",
//     type: "Back",
//     priority: 2,
//     sets: 3,
//     reps: 15
//   },
//   {
//     name: "T-Bar Row",
//     type: "Back",
//     priority: 2,
//     sets: 3,
//     reps: 10
//   },
//   {
//     name: "Wide-Grip Pull-Up",
//     type: "Back",
//     priority: 2,
//     sets: 3,
//     reps: 8
//   },
//   {
//     name: "Inverted Row",
//     type: "Back",
//     priority: 2,
//     sets: 3,
//     reps: 10
//   },
//   {
//     name: "Trap Shrugs",
//     type: "Back",
//     priority: 2,
//     sets: 3,
//     reps: 12
//   },
//   {
//     name: "Squat",
//     type: "Legs",
//     priority: 1,
//     sets: 4,
//     reps: 8
//   },
//   {
//     name: "Lunges",
//     type: "Legs",
//     priority: 2,
//     sets: 3,
//     reps: 12
//   },
//   {
//     name: "Leg Press",
//     type: "Legs",
//     priority: 2,
//     sets: 4,
//     reps: 10
//   },
//   {
//     name: "Leg Extension",
//     type: "Legs",
//     priority: 2,
//     sets: 3,
//     reps: 12
//   },
//   {
//     name: "Leg Curl",
//     type: "Legs",
//     priority: 2,
//     sets: 3,
//     reps: 12
//   },
//   {
//     name: "Calf Raise",
//     type: "Legs",
//     priority: 2,
//     sets: 3,
//     reps: 15
//   },
//   {
//     name: "Bulgarian Split Squat",
//     type: "Legs",
//     priority: 2,
//     sets: 3,
//     reps: 10
//   },
//   {
//     name: "Hip Thrust",
//     type: "Legs",
//     priority: 1,
//     sets: 4,
//     reps: 10
//   },
//   {
//     name: "Goblet Squat",
//     type: "Legs",
//     priority: 2,
//     sets: 3,
//     reps: 10
//   },
//   {
//     name: "Step-Up",
//     type: "Legs",
//     priority: 2,
//     sets: 3,
//     reps: 10
//   },
//   {
//     name: "Sumo Deadlift",
//     type: "Legs",
//     priority: 2,
//     sets: 3,
//     reps: 6
//   },
//   {
//     name: "Seated Calf Raise",
//     type: "Legs",
//     priority: 2,
//     sets: 3,
//     reps: 15
//   },
//   {
//     name: "Bicep Curl",
//     type: "Arms",
//     priority: 2,
//     sets: 3,
//     reps: 12
//   },
//   {
//     name: "Tricep Dip",
//     type: "Arms",
//     priority: 2,
//     sets: 3,
//     reps: 10
//   },
//   {
//     name: "Hammer Curl",
//     type: "Arms",
//     priority: 2,
//     sets: 3,
//     reps: 12
//   },
//   {
//     name: "Skull Crusher",
//     type: "Arms",
//     priority: 2,
//     sets: 3,
//     reps: 10
//   },
//   {
//     name: "Crunch",
//     type: "Core",
//     priority: 2,
//     sets: 3,
//     reps: 20
//   }
// ];


// async function seed() {
//   try {
//     await client.connect();
//     const db = client.db("main");
//     const collection = db.collection("exercises");

//     // Optional: Clear existing entries first
//     await collection.deleteMany({});

//     const result = await collection.insertMany(exercises);
//     console.log(`✅ Inserted ${result.insertedCount} exercises`);
//   } catch (error) {
//     console.error("❌ Failed to seed exercises:", error);
//   } finally {
//     await client.close();
//   }
// }

// seed();
