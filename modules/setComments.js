import nameUpperCasing from "../utilities/nameUpperCasing.js";

function setComments(data, labels){

    console.log('data ', data)
    console.log('labels ', labels)

    let postCards = ``;

    let postElement;
    data.forEach((post)=>{
        postElement =
            `
            <div class="opinion-post-card">
                <div class="comment-title">
                    <h4>${nameUpperCasing(post.author)}</h4>
                </div>
                <div class="comment-info-segment">

                    <div class="position card-info-container">
                        <div class="item-tittle">${labels.position}:</div>
                        <div class="item-content">${nameUpperCasing(post.position)}</div>
                    </div>

                    <div class="relation card-info-container">
                        <div class="item-tittle">${labels.relation}:</div>
                        <div class="item-content">${nameUpperCasing(post.relation)}</div>
                    </div>

                    <div class="country card-info-container">
                        <div class="item-tittle">${labels.relation}:</div>
                        <div class="item-content">Test</div>
                    </div>
                </div>
        
                <div class="comment">
                    <div class="comment-title">

                        <h4>${labels.comment}</h4>
                    </div>
                    <p class="personal-comment">
                        ${post.comment}
                    </p>
                </div>
            </div>
           
            `;
        postCards += postElement;

    })

    // console.log(postCards);
    return postCards
}

export default setComments