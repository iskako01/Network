import React from "react";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import classes from "./Dialogs.module.css";
import { useForm } from "react-hook-form";

const MessageForm = (props) => {
  const { register, handleSubmit, formState } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    props.addMessage(data.message);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <textarea {...register("message", { required: true })} />
      </div>
      <div>
        <button disabled={!formState.isValid} onClick={onsubmit}>
          Send message
        </button>
      </div>
    </form>
  );
};

const Dialogs = (props) => {
  const dialogsElement = props.dialogsPage.dialogs.map((d) => {
    return <Dialog name={d.name} id={d.id} key={d.id} />;
  });

  const messagesElement = props.dialogsPage.messages.map((m) => {
    return <Message message={m.message} key={m.id} />;
  });

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog}>{dialogsElement}</div>
      <div className={classes.messages}>
        {messagesElement}
        <MessageForm {...props} />
      </div>
    </div>
  );
};

export default Dialogs;
