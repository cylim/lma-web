import type { NextPage } from 'next'
import Image from 'next/image'
import { useTranslations } from 'use-intl';

export interface StepListItemProps {
  description: string
  title: string
  _id: string
}

const Steps = [
  { _id: 'Step 1.', title: 'Sign Up to get access to LMA Art Gallery', description: 'Sign up with your wallet (metamask)' },
  { _id: 'Step 2.', title: 'Create your NFT Marketplace', description: 'Choose one of our Premade Templates' },
  { _id: 'Step 3.', title: 'Mint NFTs and market your gallery marketplace to the world!', description: 'Stand out in every inbox and social feed.  grow your audience! show and sell your art' },
]

const StepListItem: NextPage<StepListItemProps> = ({ _id, title, description }) => {
  return (

    <div className="flex flex-row content-center items-center justify-between w-full py-4 space-x-2">
      <div className="text-l text-left flex flex-col w-1/3">
        <span className="font-bold">{_id}</span>
        <span>{title}</span>
      </div>
      <div className="text-l text-left w-3/6">{description}</div>
      <div className="flex w-1/6 justify-end">
        <Image src="/icons/arrow-right.png" alt={'Enter the page'} height={25} width={46} objectFit="contain" />
      </div>
    </div>
  )
}

const StepGuide = () => {

  const renderStep = (item: StepListItemProps) => <StepListItem key={item._id} {...item} />

  return (
    <div className="w-full divide-y border-t border-b my-20">
      {Steps.map(renderStep)}
    </div>
  )
}
export default StepGuide