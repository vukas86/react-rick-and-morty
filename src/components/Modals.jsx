import React from "react";
import styles from "./Modals.module.css";

function Modals({ charInfo, handleClose }) {
  return (
    <dialog id="modal-charInfo" open>
      <article>
        <a
          href="#close"
          aria-label="Close"
          class="close"
          data-target="modal-charInfo"
          onClick={handleClose}
        ></a>
        <hgroup>
          <div className={styles.module}>
            <img
              src={charInfo.image}
              alt={charInfo.name}
              className={styles.charImg}
            />
            <hgroup className={styles.info}>
              <h1>{charInfo.name}</h1>
              <h2>
                <span>Status: </span>
                {charInfo.status}
              </h2>
              <p>
                Cosmic fugue Apollonius of Perga as a patch of light Vangelis
                not a sunrise but a galaxyrise quasar. Extraplanetary globular
                star cluster invent the universe the only home we've ever known
                from which we spring muse about. Extraordinary claims require
                extraordinary evidence courage of our questions astonishment Sea
                of Tranquility the carbon in our apple pies decipherment.
              </p>
            </hgroup>
          </div>
        </hgroup>
      </article>
    </dialog>
  );
}

export default Modals;
