import React from 'react';

// Propsの型定義
interface TopicCardProps {
  title: string;
  content: React.ReactNode;
  className?: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, content, className }) => {
  return (
    <div className={`mt-16 px-20 py-8 w-4/5 bg-sky-50 rounded relative tracking-widest leading-9 ring-4 ${className}`}>
      <span className='absolute left-1/2 transform -translate-x-1/2 py-1 px-4 -top-6 font-semibold text-xl text-center
            bg-sky-400 text-slate-100 rounded-md ring-1'>{title}</span>
      <span className='text-slate-500'>
        {content}
      </span>
    </div>
  )
}

export default TopicCard;