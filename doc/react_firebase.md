# YouTube の動画を見ながら firebase x react の扱い方を学んだ

## Firebase Tutorial With React Hooks

YouTube: https://www.youtube.com/watch?v=rSgbYCdc4G0

- useEffect を外部に逃すのがうまい
- function なので、引数を渡すこともでき、読み込みだけを外部に逃すことができる

```javascript
import { useEffect, useState } from 'react'

const useList = () => {
    const [lists, setLists] = useState([])

    useEffect(() => {
        const unSub = firebase.firestore()
            .collection('lists')
            .onSnapshot(snap => {
                const newLists = snap.docs.map(doc => {
                    id: doc.id,
                    ...doc.data()
                })
                setLists(newLists)
            })
        return unSub
    }, [])

    return lists;
}


export const ListComponent = () => {
  list = useList();

  return (
      <ul>
        {
            lists.map(list => {
                <li key={list.id}>
                    {list.text}
                </li>
            })
        }
      </ul>
  )
}
```

## React with Firebase CRUD Operations

YouTube: https://www.youtube.com/watch?v=pI4438IHBYY
BLOG: https://www.codaffection.com/react-article/react-firebase-crud/

- add/set の使い分けがうまい
- value の中で、新規データと既存データが共存できるので、同じフォームで追加・更新が可能

```javascript
export const FormComponent = () => {
  const initialFieldValues = {
    message: "",
  };
  var [currentId, setCurrentId] = useState("");
  var [values, setValues] = useState(initialFieldValues);
  var [contactObjects, setContactObjects] = useState({});

  useEffect(() => {
    if (currentId == "") {
      setValues({ ...initialFieldValues });
    } else {
      setValues({
        ...contactObjects[currentId],
      });
    }
  }, [currentId, contactObjects]);

  const addOrEdit = (obj) => {
    if (currentId == "") {
      firebaseDb.child("contacts").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    } else {
      firebaseDb.child(`contacts/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <input
        name="message"
        placeholder="message"
        value={values.message}
        onChange={handleInputChange}
      />
      <input type="submit" value={props.currentId == "" ? "Save" : "Update"} />
    </form>
  );
};
```

## I built a chat app in 7 minutes with React & Firebase

YouTube: https://www.youtube.com/watch?v=zQyrwxMPm88

- 関連ごとがさくっとあつまっていて良い
- 7 分で全部説明してくれる

# 工夫

- 1 つめと 2 つめの動画を組み合わせる

```javascript
const useValue = ({ currentId, contactObjects }) => {
  const [values, setValues] = useState(initialFieldValues);
  useEffect(() => {
    if (currentId == "") {
      setValues({ ...initialFieldValues });
    } else {
      setValues({
        ...contactObjects[currentId],
      });
    }
  }, [currentId, contactObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return [values, handleInputChange];
};

const addOrEdit = (obj) => {
  if (currentId == "") {
    firebaseDb.child("contacts").push(obj, (err) => {
      if (err) console.log(err);
      else setCurrentId("");
    });
  } else {
    firebaseDb.child(`contacts/${currentId}`).set(obj, (err) => {
      if (err) console.log(err);
      else setCurrentId("");
    });
  }
};

export const FormComponent = () => {
  const initialFieldValues = {
    message: "",
  };
  const [currentId, setCurrentId] = useState("");
  const [contactObjects, setContactObjects] = useState({});
  const [values, handleInputChange] = useValue({ currentId, contactObjects });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addOrEdit(values);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        name="message"
        placeholder="message"
        value={values.message}
        onChange={handleInputChange}
      />
      <input type="submit" value={props.currentId == "" ? "Save" : "Update"} />
    </form>
  );
};
```
