import { Switch } from '@headlessui/react';
import { TopicButton } from '@hear/shared/ui';
import { useState } from 'react';
import styles from './index.module.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Index() {
  const [next, setNext] = useState(false);

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <Switch.Group as="div" className="flex items-center">
        <Switch
          checked={next}
          onChange={setNext}
          className={classNames(
            next ? 'bg-indigo-600' : 'bg-gray-200',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          )}
        >
          <span
            aria-hidden="true"
            className={classNames(
              next ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
            )}
          />
        </Switch>
        <Switch.Label as="span" className="ml-3">
          <span className="text-sm font-medium text-gray-900">
            {next ? 'nextjs' : 'react'}
          </span>
        </Switch.Label>
      </Switch.Group>
      <TopicButton topicName={next ? 'nextjs' : 'react'} />
    </div>
  );
}

export default Index;
