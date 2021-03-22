import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthStatus} from '../../const.js';
import {commentPost} from "../../store/api-actions";

const TargetTypes = {
  RADIO: `radio`
};

const CommentForm = (props) => {
  const {authStatus, offerID, onCommentSubmit} = props;
  const commentRef = useRef();
  const [reviewRating, setReviewRating] = useState(0);
  const [isElementsDisabled, setElementsState] = useState(false);

  const handleClickOnStars = (evt) => {
    if (evt.target.type === TargetTypes.RADIO) {
      const newRating = evt.target.value;
      setReviewRating(newRating);
    }
  };

  const handleCommentSubmit = (evt) => {
    evt.preventDefault();

    // if (commentRef.current.value.length < 50 || reviewRating === 0) {
    //   alert(`To submit review please make sure to set rating and describe your stay with at least 50 characters, but no more than 300`);
    //   return;
    // }

    // setElementsState(true);

    onCommentSubmit({
      comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      rating: 4,
      offerID
    });
  };

  if (authStatus === AuthStatus.NO_AUTH) {
    return null;
  }

  return (
    <>
      <form className="reviews__form form" action="#" method="post" onSubmit={handleCommentSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating" onClick={handleClickOnStars}>
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea ref={commentRef} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" min="50" max="300" disabled={isElementsDisabled}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={isElementsDisabled}>Submit</button>
        </div>
      </form>
    </>
  );
};

CommentForm.propTypes = {
  authStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  onCommentSubmit(reviewData) {
    dispatch(commentPost(reviewData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
