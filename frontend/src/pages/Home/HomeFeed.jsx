import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const HomeFeed = () => {
  const { posts } = useContext(UserContext);

  // Unified handler for post interactions
  const handlePostAction = (actionType, postAuthor) => {
    console.log(`${actionType} clicked for ${postAuthor}'s post`);
    alert(`${actionType} feature coming soon for ${postAuthor}'s update!`);
  };

  const handleShareAction = (type) => {
    alert(`Opening ${type} uploader...`);
  };

  const handleCreatePost = () => {
    alert("Processing your update to the AlumSync community...");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Share Box */}
      <div className="as-card p-5">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-accent flex-shrink-0 flex items-center justify-center text-primary-soft font-bold border border-border-strong">
            AM
          </div>
          <input
            type="text"
            onClick={() => handleShareAction('Post Editor')}
            placeholder="Share an update or achievement..."
            className="w-full bg-input-bg border border-transparent focus:border-primary rounded-full px-5 text-sm text-text-main placeholder:text-text-muted focus:ring-4 focus:ring-primary/10 outline-none transition-all cursor-pointer"
          />
        </div>
        <div className="flex justify-between mt-4 pt-4 border-t border-border-subtle">
          <div className="flex gap-4">
            <button
              onClick={() => handleShareAction('Photo')}
              className="text-xs font-semibold text-text-muted flex items-center gap-2 hover:text-primary-violet transition-colors p-1 rounded-md hover:bg-hover-bg"
            >
              📷 Photo
            </button>
            <button
              onClick={() => handleShareAction('Video')}
              className="text-xs font-semibold text-text-muted flex items-center gap-2 hover:text-primary-violet transition-colors p-1 rounded-md hover:bg-hover-bg"
            >
              🎥 Video
            </button>
            <button
              onClick={() => handleShareAction('Article')}
              className="hidden sm:flex text-xs font-semibold text-text-muted items-center gap-2 hover:text-primary-violet transition-colors p-1 rounded-md hover:bg-hover-bg"
            >
              📄 Article
            </button>
          </div>
          <button
            onClick={handleCreatePost}
            className="btn-primary py-1.5 px-6 text-sm shadow-glow"
          >
            Post
          </button>
        </div>
      </div>

      {/* Post List */}
      {posts.map((post) => (
        <div key={post.id} className="as-card p-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-3 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-input-bg flex items-center justify-center text-text-muted font-bold border border-border-subtle group-hover:border-primary-violet transition-colors">
                {post.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-sm flex items-center gap-1 group-hover:text-primary-violet transition-colors">
                  {post.author}
                  <span className="text-[10px] bg-accent text-primary-soft px-1.5 py-0.5 rounded-md">✓ Verified</span>
                </h4>
                <p className="text-[11px] text-text-muted">{post.role} • {post.batch}</p>
              </div>
            </div>
            <span className="text-[10px] text-text-muted font-medium">{post.timestamp}</span>
          </div>

          <p className="text-sm text-text-main leading-relaxed mb-2">{post.content}</p>

          <div className="mt-5 pt-4 border-t border-border-subtle flex gap-6">
            <button
              onClick={() => handlePostAction('Like', post.author)}
              className="text-xs font-bold text-text-muted hover:text-primary-violet flex items-center gap-1.5 transition-all active:scale-90"
            >
              ❤️ {post.likes}
            </button>
            <button
              onClick={() => handlePostAction('Comment', post.author)}
              className="text-xs font-bold text-text-muted hover:text-primary-violet flex items-center gap-1.5 transition-all"
            >
              💬 {post.comments}
            </button>
            <button
              onClick={() => handlePostAction('Share', post.author)}
              className="text-xs font-bold text-text-muted hover:text-primary-violet flex items-center gap-1.5 transition-all"
            >
              🔄 Repost
            </button>
            <button
              onClick={() => handlePostAction('Save', post.author)}
              className="text-xs font-bold text-text-muted hover:text-primary-violet ml-auto transition-all active:scale-90"
            >
              🔖 Save
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeFeed;