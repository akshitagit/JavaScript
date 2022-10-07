import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore/lite";
import { db } from "./firebase";

// quiz related functions

export async function getQuizzes(quizType) {
  const quizzesCollection = collection(db, quizType);
  const snapshot = await getDocs(quizzesCollection);
  const quizzes = snapshot.docs.map((doc) => doc.data());
  return quizzes;
}

export async function getFilteredQuizzes(quizType, userName) {
  const quizzesCollection = collection(db, quizType);
  const q = query(
    collection(quizzesCollection, where("author", "=", userName))
  );
  const snapshot = await getDocs(q);
  const quizzes = snapshot.docs.map((doc) => doc.data());
  return quizzes;
}

export async function getQuestionsById(quizType, quizId) {
  console.log(quizType, quizId);
  const quizzesCollection = collection(db, `${quizType}/${quizId}/questions`);
  const snapshot = await getDocs(quizzesCollection);
  const quizzes = snapshot.docs.map((doc) => doc.data());
  return quizzes;
}

export async function publishResult(result, quizId, currentUser) {
  await setDoc(doc(db, "results", `${currentUser}_${quizId}`), {
    [quizId]: result,
  });
}

export async function publishInitialQuiz(quizDetails) {
  await setDoc(
    doc(db, "communityQuizzes", `${quizDetails.author}${quizDetails.quizId}`),
    {
      name: quizDetails.name,
      category: quizDetails.category,
      author: quizDetails.author,
      quizId: quizDetails.quizId,
    }
  );

  quizDetails.questions.map(async (questionDetails) => {
    await addDoc(
      collection(
        db,
        `/communityQuizzes/${quizDetails.author}${quizDetails.quizId}/questions`
      ),
      {
        ansIndex: questionDetails.ansIndex,
        options: questionDetails.options,
        points: questionDetails.points,
        question: questionDetails.question,
      }
    );
  });
}

// results
export async function getResults() {
  const resultsCollection = collection(db, "results");
  const snapshot = await getDocs(resultsCollection);
  const results = snapshot.docs.map((doc) => doc.data());
  return results;
}

// helper functions

export async function getCategories() {
  const categoriesCollection = collection(db, "categories");
  const snapshot = await getDocs(categoriesCollection);
  const categories = snapshot.docs[0].data();
  return categories;
}
