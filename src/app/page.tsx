import Image from "next/image";
import styles from "./page.module.css";
import UserForm from "../../components/UserForm/UserForm";
import UsersList from "../../components/UsersList/UsersList";

export default function Home() {
  return (
    <main className={styles.main}>
      <UserForm/>
        <UsersList/>
    </main>
  );
}
